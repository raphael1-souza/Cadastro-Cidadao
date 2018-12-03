<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Escolaridade;

class EscolaridadeController extends Controller
{
    public function index()
    {
     return view('escolaridade.cadastroEscolaridade');   
    }

    public function storeEscolaridade(Request $request)
    {
        $this->validate($request,[
    		'codigo_escolaridade' => 'required | unique:Escolaridade',
    		'descricao_escolaridade' => 'required|max:90',
            ]);
        $escolaridade = new Escolaridade;
        $escolaridade->codigo_escolaridade = $request->codigo_escolaridade;
        $escolaridade->descricao_escolaridade = $request->descricao_escolaridade;
        $escolaridade->save();
        return redirect('/listar/escolaridade')->with('sucesso','Escolaridade Cadastrada com sucesso!');
    }

    public function listagem(Request $request)
    {
        $escolaridade = Escolaridade::all();
        return view('escolaridade.listagemEscolaridade',compact('escolaridade'));
    }

    public function update(Request $request,$codigo_escolaridade)
    {
        $escolaridade = Escolaridade::findOrFail($codigo_escolaridade);
        $escolaridade->descricao_escolaridade=$request->descricao_escolaridade;
        $escolaridade->update();
        return redirect()->back()->with('sucesso','Escolaridade Atualizada com sucesso!');
    }

    public function destroy($codigo_escolaridade){
		$escolaridade=Escolaridade::findOrFail($codigo_escolaridade);
		$escolaridade->delete();
		return redirect()->back()->with('sucesso','Escolaridade excluida com sucesso!');
	}
}
