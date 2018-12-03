<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Ocupacao;

class OcupacaoController extends Controller
{
    public function index()
    {
     return view('ocupacao.cadastroOcupacao');   
    }

    public function storeOcupacao(Request $request)
    {
        $this->validate($request,[
    		'codigo_ocupacao' => 'required | unique:Ocupacao',
    		'descricao_ocupacao' => 'required|max:90',
            ]);
        $ocupacao = new Ocupacao;
        $ocupacao->codigo_ocupacao = $request->codigo_ocupacao;
        $ocupacao->descricao_ocupacao = $request->descricao_ocupacao;
        $ocupacao->save();
        return redirect('/listar/ocupacao')->with('sucesso','Ocupação Cadastrada com sucesso!');
    }

    public function listagem(Request $request)
    {
        $ocupacao = Ocupacao::all();
        return view('ocupacao.listagemOcupacao',compact('ocupacao'));
    }

    public function update(Request $request,$codigo_ocupacao)
    {
        $ocupacao = Ocupacao::findOrFail($codigo_ocupacao);
        $ocupacao->descricao_ocupacao=$request->descricao_ocupacao;
        $ocupacao->update();
        return redirect()->back()->with('sucesso','Ocupação Atualizada com sucesso!');
    }

    public function destroy($codigo_ocupacao){
		$ocupacao=Ocupacao::findOrFail($codigo_ocupacao);
		$ocupacao->delete();
		return redirect()->back()->with('sucesso','Ocupação excluida com sucesso!');
	}
}
