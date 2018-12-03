<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Estado_Civil;

class EcivilController extends Controller
{
    public function index()
    {
     return view('estadocivil.cadastroEstadocivil');   
    }

    public function storeEstadocivil(Request $request)
    {
        //dd($request->all());
        $this->validate($request,[
    		'codigo_ecivil' => 'required | unique:EstadoCivil',
    		'descricao_ecivil' => 'required|max:90',
            ]);
        $ecivil = new Estado_Civil;
        $ecivil->codigo_ecivil = $request->codigo_ecivil;
        $ecivil->descricao_ecivil = $request->descricao_ecivil;
        $ecivil->save();
        return redirect('/listar/estadocivil')->with('sucesso','Estado Civil cadastrado com sucesso!');
    }

    public function listagem(Request $request)
    {
        $ecivil = Estado_Civil::all();
        return view('estadocivil.listagemEstadocivil',compact('ecivil'));
    }

    public function update(Request $request,$codigo_estadocivil)
    {
        $ecivil = Estado_Civil::findOrFail($codigo_estadocivil);
        $ecivil->descricao_ecivil=$request->descricao_ecivil;
        $ecivil->update();
        return redirect()->back()->with('sucesso','Estado civil atualizado com sucesso!');
    }

    public function destroy($codigo_estadocivil){
		$ecivil=Estado_Civil::findOrFail($codigo_estadocivil);
		$ecivil->delete();
		return redirect()->back()->with('sucesso','Estado civil excluido com sucesso!');
	}
}
