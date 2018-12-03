<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UF;

class UfController extends Controller
{
    public function index()
    {
     return view('uf.cadastroUf');   
    }

    public function storeUf(Request $request)
    {
        $this->validate($request,[
    		'codigo_uf' => 'required | unique:UF',
    		'descricao_uf' => 'required|max:90',
            ]);
        $uf = new UF;
        $uf->codigo_uf = $request->codigo_uf;
        $uf->descricao_uf = $request->descricao_uf;
        $uf->save();
        return redirect('/listar/uf')->with('sucesso','UF Cadastrada com sucesso!');
    }

    public function listagem(Request $request)
    {
        $uf = UF::all();
        return view('uf.listagemUf',compact('uf'));
    }

    public function update(Request $request,$codigo_uf)
    {
        $uf = UF::findOrFail($codigo_uf);
        $uf->descricao_uf=$request->descricao_uf;
        $uf->update();
        return redirect()->back()->with('sucesso','UF Atualizada com sucesso!');
    }

    public function destroy($codigo_uf){
		$uf=UF::findOrFail($codigo_uf);
		$uf->delete();
		return redirect()->back()->with('sucesso','UF excluida com sucesso!');
	}
}
