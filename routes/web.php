<?php

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

Route::get('/', function () {
    return view('auth.login');
});

Auth::routes();

Route::get('/cadastrar/vinculo','VinculoController@index')->name('vinculo');
Route::post('/cadastrar/vinculo','VinculoController@storeVinculo')->name('cadastro.vinculo');
Route::get('/listar/vinculo','VinculoController@listagem')->name('listar.vinculo');
Route::post('/atualizar/vinculo/{codigo_vinculo}','VinculoController@update')->name('update.vinculo');
Route::get('/deletar/vinculo/{codigo_vinculo}','VinculoController@destroy')->name('deletar.vinculo');

Route::get('/cadastrar/genero','GeneroController@index')->name('genero');
Route::post('/cadastrar/genero','GeneroController@storegenero')->name('cadastro.genero');
Route::get('/listar/genero','GeneroController@listagem')->name('listar.genero');
Route::post('/atualizar/genero/{codigo_genero}','GeneroController@update')->name('update.genero');
Route::get('/deletar/genero/{codigo_genero}','GeneroController@destroy')->name('deletar.genero');

Route::get('/cadastrar/raca','RacaController@index')->name('raca');
Route::post('/cadastrar/raca','RacaController@storeRaca')->name('cadastro.raca');
Route::get('/listar/raca','RacaController@listagem')->name('listar.raca');
Route::post('/atualizar/raca/{codigo_raca}','RacaController@update')->name('update.raca');
Route::get('/deletar/raca/{codigo_raca}','RacaController@destroy')->name('deletar.raca');

Route::get('/cadastrar/escolaridade','EscolaridadeController@index')->name('escolaridade');
Route::post('/cadastrar/escolaridade','EscolaridadeController@storeEscolaridade')->name('cadastro.escolaridade');
Route::get('/listar/escolaridade','EscolaridadeController@listagem')->name('listar.escolaridade');
Route::post('/atualizar/escolaridade/{codigo_escolaridade}','EscolaridadeController@update')->name('update.escolaridade');
Route::get('/deletar/escolaridade/{codigo_escolaridade}','EscolaridadeController@destroy')->name('deletar.escolaridade');

Route::get('/cadastrar/uf','UfController@index')->name('uf');
Route::post('/cadastrar/uf','UfController@storeUf')->name('cadastro.uf');
Route::get('/listar/uf','UfController@listagem')->name('listar.uf');
Route::post('/atualizar/uf/{codigo_uf}','UfController@update')->name('update.uf');
Route::get('/deletar/uf/{codigo_uf}','UfController@destroy')->name('deletar.uf');

Route::get('/cadastrar/estadocivil','EcivilController@index')->name('estadocivil');
Route::post('/cadastrar/estadocivil','EcivilController@storeEstadocivil')->name('cadastro.estadocivil');
Route::get('/listar/estadocivil','EcivilController@listagem')->name('listar.estadocivil');
Route::post('/atualizar/estadocivil/{codigo_estadocivil}','EcivilController@update')->name('update.estadocivil');
Route::get('/deletar/estadocivil/{codigo_estadocivil}','EcivilController@destroy')->name('deletar.estadocivil');

Route::get('/cadastrar/ocupacao','OcupacaoController@index')->name('ocupacao');
Route::post('/cadastrar/ocupacao','OcupacaoController@storeOcupacao')->name('cadastro.ocupacao');
Route::get('/listar/ocupacao','OcupacaoController@listagem')->name('listar.ocupacao');
Route::post('/atualizar/ocupacao/{codigo_ocupacao}','OcupacaoController@update')->name('update.ocupacao');
Route::get('/deletar/ocupacao/{codigo_ocupacao}','OcupacaoController@destroy')->name('deletar.ocupacao');


Route::get('/cadastrar/cidadao','CidadaoController@index')->name('cidadao');
Route::post('/cadastrar/cidadao','CidadaoController@storeCidadao')->name('cadastro.cidadao');
Route::get('/home','CidadaoController@listagem')->name('listar.cidadao');
Route::post('/atualizar/cidadao/{cpf}','CidadaoController@update')->name('update.cidadao');
Route::get('/deletar/cidadao/{cpf}','CidadaoController@destroy')->name('deletar.cidadao');
Route::get('/ordemalfabetica','CidadaoController@ordemAlfabetica')->name('ordemAlfabetica');
Route::get('/ordemescolaridade','CidadaoController@ordemEscolaridade')->name('ordemEscolaridade');
Route::get('/ordemidade','CidadaoController@ordemIdade')->name('ordemIdade');



