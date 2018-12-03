<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Genero;

class GeneroController extends Controller
{
    public function index()
    {
     return view('genero.cadastroGenero');   
    }

    public function storeGenero(Request $request)
    {
        $this->validate($request,[
    		'codigo_genero' => 'required | unique:Genero',
    		'descricao_genero' => 'required|max:90',
            ]);
        $genero = new Genero;
        $genero->codigo_genero = $request->codigo_genero;
        $genero->descricao_genero = $request->descricao_genero;
        $genero->save();
        return redirect('/listar/genero')->with('sucesso','Genero Cadastrado com sucesso!');
    }

    public function listagem(Request $request)
    {
        $genero = Genero::all();
        return view('genero.listagemGenero',compact('genero'));
    }

    public function update(Request $request,$codigo_genero)
    {
        $genero = Genero::findOrFail($codigo_genero);
        $genero->descricao_genero=$request->descricao_genero;
        $genero->update();
        return redirect()->back()->with('sucesso','Gênero Atualizado com sucesso!');
    }

    public function destroy($codigo_genero){
		$genero=Genero::findOrFail($codigo_genero);
		$genero->delete();
		return redirect()->back()->with('sucesso','Gênero excluido com sucesso!');
	}
}
