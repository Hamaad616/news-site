<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/admin', function () {
    return redirect()->route('admin.dashboard');
});

Route::middleware(['auth'])->prefix('/admin')->group(function() {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->middleware(['auth'])->name('admin.dashboard');

    Route::get('posts', [PostController::class, 'index'])->name('admin.posts');
    Route::get('categories', [CategoryController::class, 'index'])->name('admin.categories');
    Route::get('posts/create', [PostController::class, 'create'])->name('admin.posts.create');
    Route::get('categories/create', [CategoryController::class, 'create'])->name('admin.categories.create');
    Route::post('posts/store', [PostController::class, 'store'])->name('admin.posts.store');
    Route::post('categories/store', [CategoryController::class, 'store'])->name('admin.categories.store');
    Route::get('posts/{post}', [PostController::class, 'show'])->name('admin.posts.show');
    Route::get('categories/{category}', [CategoryController::class, 'showCategory'])->name('admin.categories.show');
    Route::patch('posts/{post}', [PostController::class, 'update'])->name('admin.posts.update');
    Route::patch('categories/{category}', [CategoryController::class, 'update'])->name('admin.categories.update');
    Route::post('posts/{post}/image', [PostController::class, 'updateImage'])->name('admin.posts.image.update');

    Route::post('image/upload', [ImageController::class, 'upload'])->name('image.upload');
});

Route::middleware(['auth'])->group(function (){
    Route::controller(CategoryController::class)->group(function (){
        Route::get('category/{category}', 'show')->name('category.show');
    });
});

Route::get('/storage/images/{filename}', function ($filename) {
    $path = Storage::path("images/{$filename}");

    if (!File::exists($path)) {
        abort(404);
    }

    return response()->file($path);
})->name('storage.images');

Route::get('posts/{author}', [PostController::class, 'postsByAuthor'])->name('posts.author');
Route::post('category/{category}/posts', [PostController::class, 'postsByCategory'])->name('category.posts');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/{category}/{slug}', [PostController::class, 'post_public_view'])->name('posts.show');

Route::get('favicon', function (){
    return asset('favicon.ico');
})->name('favicon');

require __DIR__.'/auth.php';
