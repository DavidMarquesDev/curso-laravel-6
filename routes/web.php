<?php

use Illuminate\Support\Facades\Route;

    Route::get('/login', function () {
        return 'login';
    })->name('login');

    Route::get('/', function () {
        return view('welcome');
        //return view('app');
    });

    Route::get('/clientes', function () {
        return view('clientes');
        //return view('app');
    });

    Route::middleware(['auth'])->group(function () {
        Route::get('/produtos', function () {
            return view('produtos');
        });
    });
