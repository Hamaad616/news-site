<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function show($slug)
    {
        $category = Category::firstWhere('slug', $slug);

        if(!$category){
            abort(404);
        }

        $categories = Category::where('parent_id', 0)->with('children')->get();
        return Inertia::render("Category/View", [
            'categories' => $categories,
            'category' => $category
        ]);
    }

    public function index()
    {
        $categories = Category::where('parent_id', 0)
            ->with('children')
            ->get();
        return Inertia::render("Category/Index", [
            'categories' => $categories
        ]);
    }

    public function showCategory(Category $category){

        return Inertia::render('Category/Show', [
            'category' => $category,
        ]);
    }

    public function create(){
        return Inertia::render('Category/Create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:10',
        ]);

        $category = Category::create([
            'slug' => Str::slug($request->name),
            'name' => $request->name,
        ]);

        return redirect(route('admin.categories.show', ['category' => $category]));
    }

    public function update(Category $category, Request $request){
        $request->validate([
            'name' => 'required|max:10',
            'slug' => 'required|min:1',
        ]);

        $category->update([
            'slug' => Str::slug($request->slug),
            'name' => $request->name,
        ]);

        return redirect(route('admin.categories.show', ['category' => $category]));
    }

}
