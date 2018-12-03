<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vinculo;

class VinculoController extends Controller
{
    public function index()
    {
     return view('vinculo.cadastroVinculo');   
    }
    public function storeVinculo(Request $request)
    {
        $this->validate($request,[
    		'codigo_vinculo' => 'required | unique:Vinculo',
    		'descricao_vinculo' => 'required|max:90',
            ]);
        $vinculo = new Vinculo;
        $vinculo->codigo_vinculo = $request->codigo_vinculo;
        $vinculo->descricao_vinculo = $request->descricao_vinculo;
        $vinculo->save();
        return redirect('/listar/vinculo')->with('sucesso','Vinculo Cadastrado com sucesso!');
    }

    public function listagem(Request $request)
    {
        $vinculo = Vinculo::all();
        return view('vinculo.listagemVinculo',compact('vinculo'));
    }

    public function update(Request $request,$codigo_vinculo)
    {
        $vinculo = Vinculo::findOrFail($codigo_vinculo);
        $vinculo->descricao_vinculo=$request->descricao_vinculo;
        $vinculo->update();
        return redirect()->back()->with('sucesso','Vinculo Atualizado com sucesso!');
    }

    public function destroy($codigo_vinculo){
		$vinculo=Vinculo::findOrFail($codigo_vinculo);
		$vinculo->delete();
		return redirect()->back()->with('sucesso','Vinculo excluido com sucesso!');
	}
}
