<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\UserDashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('super-admin', function () {
    return 'Hi Super Admin';
})->middleware('role:super_admin');

Route::get('admin', function () {
    return 'Hi Admin';
})->middleware('role:admin');

Route::get('user', function () {
    return 'Hi User';
})->middleware('role:user');

Route::redirect('/', '/login');

Route::get('/about', function () {
    return Inertia::render('About');
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/', [UserDashboardController::class, 'index'])->name('index');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::get('/test', [AdminDashboardController::class, 'index'])->name('index');
});

require __DIR__.'/auth.php';

