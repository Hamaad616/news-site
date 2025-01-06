<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\News;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    // Index Page
    public function index()
    {
        $categories = Category::where('parent_id', 0)->with('children')->get();
        $featuredNews = Post::whereFeatured(true)->latest()->with(['user', 'category'])->first();

        $topStoriesIds = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'news');
            })
            ->orderBy('created_at', 'DESC')
            ->take(4)
            ->pluck('id')
            ->toArray();

        $topStories = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'news');
            })
            ->whereNotIn('id', [$featuredNews?->id])
            ->orderBy('created_at', 'DESC')
            ->take(4)
            ->get();

        $exceptStories = array_merge($topStoriesIds, [$featuredNews?->id]);

        $moreNews = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'news');
            })
            ->whereNotIn('id', $exceptStories)
            ->whereFeatured(false)
            ->orderBy('created_at', 'DESC')
            ->take(8)  // Take the next 8 posts (or however many you want)
            ->skip(4)
            ->get();

        $citizenshipCategory = Category::where('name', 'Entertainment')->first();
        $citizenshipPosts = Post::where('category_id', $citizenshipCategory?->id)
            ->with(['category', 'user'])
            ->orderBy('created_at', 'desc')
            ->take(2)
            ->get();

        $residencePosts = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'global');
            })
            ->orderBy('created_at', 'DESC')
            ->take(4)
            ->get();

        $digitalNomad = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'entertainment');
            })
            ->orderBy('created_at', 'DESC')
            ->take(8)
            ->get();

        $skilledImmigrationPosts = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'sports');
            })
            ->orderBy('created_at', 'DESC')
            ->take(9)
            ->get();

        $businessImmigrationPosts = Post::with(['category', 'user'])
            ->whereHas('category', function ($q) {
                $q->where('slug', 'business');
            })
            ->orderBy('created_at', 'DESC')
            ->take(9)
            ->get();

        return Inertia::render('Home/Index', [
            'categories' => $categories,
            'featuredNews' => $featuredNews,
            'topStories' => $topStories,
            'citizenshipPosts' => $citizenshipPosts,
            'residencePosts' => $residencePosts,
            'moreNews' => $moreNews,
            'digitalNomadPosts' => $digitalNomad,
            'skilledImmigrationPosts' => $skilledImmigrationPosts,
            'businessImmigrationPosts' => $businessImmigrationPosts,
            'posts' => session('posts') ?? []
        ]);
    }
}
