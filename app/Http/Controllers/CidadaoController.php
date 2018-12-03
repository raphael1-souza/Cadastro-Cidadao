<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Cidadao;
use App\Escolaridade;
use App\Estado_Civil;
use App\Genero;
use App\Ocupacao;
use App\Raca;
use App\UF;
use App\Vinculo;

class CidadaoController extends Controller
{
    public function index()
    {
        $escolaridade = Escolaridade::all();
        $ecivil = Estado_Civil::all();
        $genero = Genero::all();
        $ocupacao = Ocupacao::all();
        $raca = Raca::all();
        $uf = UF::all();
        $vinculo = Vinculo::all();
        return view('cidadao.cadastroCidadao',compact('escolaridade','ecivil','genero','ocupacao','raca','uf','vinculo'));   
    }
public static function cpfRandom($mascara = "1") {
    $n1 = rand(0, 9);
    $n2 = rand(0, 9);
    $n3 = rand(0, 9);
    $n4 = rand(0, 9);
    $n5 = rand(0, 9);
    $n6 = rand(0, 9);
    $n7 = rand(0, 9);
    $n8 = rand(0, 9);
    $n9 = rand(0, 9);
    $d1 = $n9 * 2 + $n8 * 3 + $n7 * 4 + $n6 * 5 + $n5 * 6 + $n4 * 7 + $n3 * 8 + $n2 * 9 + $n1 * 10;
    $d1 = 11 - (self::mod($d1, 11) );
    if ($d1 >= 10) {
        $d1 = 0;
    }
    $d2 = $d1 * 2 + $n9 * 3 + $n8 * 4 + $n7 * 5 + $n6 * 6 + $n5 * 7 + $n4 * 8 + $n3 * 9 + $n2 * 10 + $n1 * 11;
    $d2 = 11 - (self::mod($d2, 11) );
    if ($d2 >= 10) {
        $d2 = 0;
    }
    $retorno = '';
    if ($mascara == 1) {
        $retorno = '' . $n1 . $n2 . $n3 . "." . $n4 . $n5 . $n6 . "." . $n7 . $n8 . $n9 . "-" . $d1 . $d2;
    } else {
        $retorno = '' . $n1 . $n2 . $n3 . $n4 . $n5 . $n6 . $n7 . $n8 . $n9 . $d1 . $d2;
    }
    return $retorno;
}

private static function mod($dividendo, $divisor) {
    return round($dividendo - (floor($dividendo / $divisor) * $divisor));
}

    public function storeCidadao(Request $request)
    {
        if(Cidadao::where('nome_cidadao',$request->nome_cidadao)->where('data_nasc',date_format(date_create_from_format('d/m/Y',$request->data_nasc),'Y-m-d'))->where('codigo_uf',$request->codigo_uf)->where('nome_mae',$request->nome_mae)->first() != NULL)
        {
            return redirect()->back()->with('deuruim','Cidadão já cadastrado');
        }
        $this->validate($request,[
    		'nome_cidadao' => 'required | max:90',
            'nome_social' => 'max:90',
            'nome_mae' => 'required | max:90',
            'data_nasc' => 'required',
            'sexo' => 'required',
            'codigo_genero' => 'required',
            'codigo_raca' => 'required',
            'codigo_uf' => 'required',
            'codigo_ecivil' => 'required',
            'codigo_escolaridade' => 'required',
            'codigo_ocupacao' => 'required',
            'codigo_vinculo' => 'required',
            'renda_individual' => 'required',
            'renda_familiar' => 'required',
            'beneficio' => 'required',
            'tipo_beneficio' => 'max:90',
            'cartao_sus' => 'required',
            ]);
        
        $cidadao = new Cidadao;
        $cidadao->cpf =$this->cpfRandom(0);
        $cidadao->nome_cidadao = $request->nome_cidadao;
        $cidadao->nome_social = $request->nome_social;
        $cidadao->nome_mae = $request->nome_mae;
        $cidadao->data_nasc = date_format(date_create_from_format('d/m/Y',$request->data_nasc),'Y-m-d');
        $cidadao->sexo = $request->sexo;
        $cidadao->codigo_genero = $request->codigo_genero;
        $cidadao->codigo_raca = $request->codigo_raca;
        $cidadao->codigo_uf = $request->codigo_uf;
        $cidadao->codigo_ecivil = $request->codigo_ecivil;
        $cidadao->codigo_escolaridade = $request->codigo_escolaridade;
        $cidadao->codigo_ocupacao = $request->codigo_ocupacao;
        $cidadao->codigo_vinculo = $request->codigo_vinculo;
        $cidadao->renda_individual = (float)$request->renda_individual;
        $cidadao->renda_familiar = (float)$request->renda_familiar;
        $cidadao->beneficio = $request->beneficio;
        $cidadao->tipo_beneficio = $request->tipo_beneficio;
        $cidadao->valor_beneficio = $request->valor_beneficio;
        $cidadao->cartao_sus = $request->cartao_sus;
        $cidadao->save();
        return redirect('/home')->with('sucesso','Ocupação Cadastrada com sucesso!');
    }

    public function listagem(Request $request)
    {
        $cidadao = Cidadao::all();
        $escolaridade = Escolaridade::all();
        $ecivil = Estado_Civil::all();
        $genero = Genero::all();
        $ocupacao = Ocupacao::all();
        $raca = Raca::all();
        $uf = UF::all();
        $vinculo = Vinculo::all();
        return view('home',compact('escolaridade','ecivil','genero','ocupacao','raca','uf','vinculo','cidadao'));
    }

    public function update(Request $request,$cpf)
    {
        $cidadao = Cidadao::findOrFail($cpf);
        $cidadao->nome_cidadao = $request->nome_cidadao;
        $cidadao->nome_social = $request->nome_social;
        $cidadao->nome_mae = $request->nome_mae;
        $cidadao->data_nasc = date_format(date_create_from_format('d/m/Y',$request->data_nasc),'Y-m-d');
        $cidadao->sexo = $request->sexo;
        $cidadao->codigo_genero = $request->codigo_genero;
        $cidadao->codigo_raca = $request->codigo_raca;
        $cidadao->codigo_uf = $request->codigo_uf;
        $cidadao->codigo_ecivil = $request->codigo_ecivil;
        $cidadao->codigo_escolaridade = $request->codigo_escolaridade;
        $cidadao->codigo_ocupacao = $request->codigo_ocupacao;
        $cidadao->codigo_vinculo = $request->codigo_vinculo;
        $cidadao->renda_individual = (float)$request->renda_individual;
        $cidadao->renda_familiar = (float)$request->renda_familiar;
        $cidadao->beneficio = $request->beneficio;
        $cidadao->tipo_beneficio = $request->tipo_beneficio;
        $cidadao->valor_beneficio = $request->valor_beneficio;
        $cidadao->cartao_sus = $request->cartao_sus;
        $cidadao->update();
        return redirect()->back()->with('sucesso','Cidadão Atualizado com sucesso!');
    }

    public function destroy($cpf){
		$cidadao=Cidadao::findOrFail($cpf);
		$cidadao->delete();
		return redirect()->back()->with('sucesso','Cidadão excluido com sucesso!');
    }
    
    public function ordemAlfabetica(){
        $cidadao = Cidadao::select('*')->orderBy('nome_cidadao','asc')->get();
        $escolaridade = Escolaridade::all();
        $ecivil = Estado_Civil::all();
        $genero = Genero::all();
        $ocupacao = Ocupacao::all();
        $raca = Raca::all();
        $uf = UF::all();
        $vinculo = Vinculo::all();
        return view('home',compact('escolaridade','ecivil','genero','ocupacao','raca','uf','vinculo','cidadao'));
    }
    public function ordemEscolaridade()
    {
        $cidadao = Cidadao::select('*')->orderBy('codigo_escolaridade','asc')->get();
        $escolaridade = Escolaridade::all();
        $ecivil = Estado_Civil::all();
        $genero = Genero::all();
        $ocupacao = Ocupacao::all();
        $raca = Raca::all();
        $uf = UF::all();
        $vinculo = Vinculo::all();
        return view('home',compact('escolaridade','ecivil','genero','ocupacao','raca','uf','vinculo','cidadao'));    
    }
    public function ordemIdade()
    {
        
        $escolaridade = Escolaridade::all();
        $ecivil = Estado_Civil::all();
        $genero = Genero::all();
        $ocupacao = Ocupacao::all();
        $cidadao=Cidadao::groupBy('codigo_ocupacao')->orderBy('data_nasc','desc')->get();
        $raca = Raca::all();
        $uf = UF::all();
        $vinculo = Vinculo::all();
        return view('home',compact('escolaridade','ecivil','genero','ocupacao','raca','uf','vinculo','cidadao'));    
    }
}
