<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Raca;

class RacaController extends Controller
{
    public function index()
    {
     return view('raca.cadastroRaca');   
    }

    public function storeRaca(Request $request)
    {
        $this->validate($request,[
    		'codigo_raca' => 'required | unique:Raca',
    		'descricao_raca' => 'required|max:90',
            ]);
        $raca = new Raca;
        $raca->codigo_raca = $request->codigo_raca;
        $raca->descricao_raca = $request->descricao_raca;
        $raca->save();
        return redirect('/listar/raca')->with('sucesso','Raça Cadastrada com sucesso!');
    }

    public function listagem(Request $request)
    {
        $raca = Raca::all();
        return view('raca.listagemRaca',compact('raca'));
    }

    public function update(Request $request,$codigo_raca)
    {
        $raca = Raca::findOrFail($codigo_raca);
        $raca->descricao_raca=$request->descricao_raca;
        $raca->update();
        return redirect()->back()->with('sucesso','Raça Atualizada com sucesso!');
    }

    public function destroy($codigo_raca){
		$raca=Raca::findOrFail($codigo_raca);
		$raca->delete();
		return redirect()->back()->with('sucesso','Raça excluida com sucesso!');
	}
}
