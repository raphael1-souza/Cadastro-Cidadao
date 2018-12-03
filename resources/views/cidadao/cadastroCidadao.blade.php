@extends('layouts.template')
@section('conteudo')
@if(session('sucesso'))
    <div class="c-alert c-alert--success">
        <i class="c-alert__icon fa fa-check-circle"></i> {{session('sucesso')}}
    </div>
 @endif

 @if(session('deuruim'))
    <div class="c-alert c-alert--danger">
        <i class="c-alert__icon fa fa-check-circle"></i> {{session('deuruim')}}
    </div>
 @endif
 
      @if ($errors->any())
      <div class="c-alert c-alert--danger alert fade show">
        @foreach ($errors->all() as $error)   
            <i class="c-alert__icon fa fa-times-circle"></i> {{ $error }}.
            <button class="c-close" data-dismiss="alert" type="button">&times;</button>
        @endforeach
        </div>
        @endif
<div class="row">
                    <div class="col-12">
                        <div class="c-card u-p-medium">
                            <div class="row u-justify-center">
                                <div class="col-md-7">
                                    <div class="u-mt-large u-text-center">
                                        <h4 class="u-mb-xsmall" style="padding-bottom:20px;padding-top:-10px;">Cadastro Cidadão</h4>
                                    </div>
                                </div>
                            </div>
                            <form action="{{route('cadastro.cidadao')}}" method="POST" >
                            {{csrf_field()}}
                            <div class="row">

                            <div class="col-md-12">
                                <div class="c-field">
                                    <label class="c-field__label" for="input13">Nome do Cidadão: </label>
                                    <input class="c-input" type="text" name="nome_cidadao" value="{{ old('nome_cidadao') }}" id="input13" required placeholder="">
                                    <small class="c-field__message">
                                        <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                    </small>
                                </div>
                                <div class="row">
                                    <div class="c-field col-md-12 u-mb-medium">
                                        <label class="c-field__label" for="input13">Nome Social: </label>
                                        <input class="c-input" type="text" name="nome_social" value="{{ old('nome_social') }}" id="input13" placeholder="">
                                    </div>
                                </div>
                                <div class="c-field">
                                    <label class="c-field__label" for="input13">Nome da Mãe: </label>
                                    <input class="c-input" type="text" name="nome_mae" value="{{ old('nome_mae') }}" id="input13" required placeholder="">
                                    <small class="c-field__message">
                                        <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                    </small>
                                </div>
                                <div class="row">
                                    <div class="c-field col-md-6 u-mb-medium" style="margin-right:7%;">
                                        <label class="c-field__label" for="input13">Data de Nascimento: </label>
                                        <div class="c-field has-addon-left">
                                            <span class="c-field__addon"><i class="fa fa-calendar"></i></span>
                                            <label class="c-field__label u-hidden-visually" for="input9">Disabled Input</label>
                                            <input class="c-input" data-toggle="datepicker" name="data_nasc" value="{{ old('data_nasc') }}" id="input9" type="text" required placeholder="Abra o calendário">
                                            <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                            </small>
                                        </div>
                                    </div>
                                    <div class="c-field col-md-5 u-mb-medium">
                                        <label class="c-field__label" for="input13">Sexo: </label>
                                        <div class ="row">
                                        <div class="c-choice c-choice--radio " style="margin-right:5px;">
                                            <input class="c-choice__input" value="m" id="radio1" name="sexo" type="radio">
                                            <label class="c-choice__label" for="radio1">Masculino</label>
                                        </div>
                                        <div class="c-choice c-choice--radio">
                                            <input class="c-choice__input"  value="f" id="radio2" name="sexo" type="radio">
                                            <label class="c-choice__label" for="radio2">Feminino</label>
                                        </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="c-field  col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="select2">Gênero Declarado</label>

                                        <!-- Select2 jquery plugin is used -->
                                        <select class="c-select has-search" required name="codigo_genero" id="codigo_genero">
                                            @foreach($genero as $g)
                                                <option value="{{$g->codigo_genero}}">{{$g->descricao_genero}}</option>
                                            @endforeach
                                        </select>
                                        <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                    <div class="c-field  col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="select2">UF de Nascimento</label>

                                        <!-- Select2 jquery plugin is used -->
                                        <select class="c-select has-search" required name="codigo_uf" id="codigo_uf">
                                            @foreach($uf as $u)
                                                <option value="{{$u->codigo_uf}}">{{$u->codigo_uf}} - {{$u->descricao_uf}}</option>
                                            @endforeach
                                        </select>
                                        <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                    <div class="c-field  col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="select2">Raça/cor</label>

                                        <!-- Select2 jquery plugin is used -->
                                        <select class="c-select has-search" name="codigo_raca" required id="codigo_raca">
                                            @foreach($raca as $r)
                                                <option value="{{$r->codigo_raca}}">{{$r->descricao_raca}}</option>
                                            @endforeach
                                        </select>
                                        <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="c-field  col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="select2">Estado civil</label>

                                        <!-- Select2 jquery plugin is used -->
                                        <select class="c-select has-search" name="codigo_ecivil"  required id="codigo_ecivil">
                                            @foreach($ecivil as $ec)
                                                <option value="{{$ec->codigo_ecivil}}">{{$ec->descricao_ecivil}}</option>
                                            @endforeach
                                        </select>
                                        <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                    <div class="c-field  col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="select2">Escolaridade</label>

                                        <!-- Select2 jquery plugin is used -->
                                        <select class="c-select has-search" name="codigo_escolaridade" required id="codigo_escolaridade">
                                            @foreach($escolaridade as $e)
                                                <option value="{{$e->codigo_escolaridade}}">{{$e->descricao_escolaridade}}</option>
                                            @endforeach>
                                        </select>
                                        <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                    <div class="c-field  col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="select2">Ocupação</label>

                                        <!-- Select2 jquery plugin is used -->
                                        <select class="c-select has-search" name="codigo_ocupacao" required id="codigo_ocupacao">
                                            @foreach($ocupacao as $o)
                                                <option value="{{$o->codigo_ocupacao}}">{{$o->descricao_ocupacao}}</option>
                                            @endforeach>
                                        </select>
                                        <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="c-field  col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="select2">Vínculo Empregatício</label>

                                        <!-- Select2 jquery plugin is used -->
                                        <select class="c-select has-search" name="codigo_vinculo"  required id="codigo_vinculo">
                                            @foreach($vinculo as $v)
                                                <option value="{{$v->codigo_vinculo}}">{{$v->descricao_vinculo}}</option>
                                            @endforeach>
                                        </select>
                                        <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                    <div class="c-field  col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="input13">Renda individual: </label>
                                        <input class="c-input" type="text" name="renda_individual" id="money1" value="{{ old('renda_individual') }}" required placeholder="">
                                        <small class="c-field__message">
                                            <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                    <div class="c-field  col-md-4 u-mb-medium">
                                    <label class="c-field__label" for="input13">Renda familiar: </label>
                                        <input class="c-input" type="text" name="renda_familiar" value="{{ old('renda_familiar') }}" id="money2" required placeholder="">
                                        <small class="c-field__message">
                                            <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="c-field col-md-4 u-mb-medium">
                                        <label class="c-field__label" for="input13">Possui Beneficio: </label>
                                        <div class ="row">
                                        <div class="c-choice c-choice--radio " style="margin-right:5px;">
                                            <input class="c-choice__input " id="radio3" name="beneficio" value="sim" type="radio" checked>
                                            <label class="c-choice__label" for="radio3">Sim</label>
                                        </div>
                                        <div class="c-choice c-choice--radio">
                                            <input class="c-choice__input " id="radio4" name="beneficio"  value="nao" type="radio" >
                                            <label class="c-choice__label" for="radio4">Não</label>
                                        </div>
                                        </div>
                                    </div>

                                    <div class="camposExtras col-md-8 ">
                                        <div class="row">
                                        <div class="c-field  col-md-6 u-mb-medium">
                                            <label class="c-field__label" for="input13">Qual Beneficio: </label>
                                            <input class="c-input" type="text" name="tipo_beneficio"  value="{{ old('tipo_beneficio') }}" id="input13"  placeholder="">
                                            <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                            </small>
                                        </div>
                                        <div class="c-field  col-md-6 u-mb-medium">
                                        <label class="c-field__label" for="input13">Valor: </label>
                                            <input class="c-input" type="text" name="valor_beneficio" id="money" value="{{ old('valor_beneficio') }}"  placeholder="">
                                            <small class="c-field__message">
                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                            </small>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="c-field">
                                    <label class="c-field__label" for="input13">Cartão Nacional do SUS </label>
                                    <input class="c-input" type="text" name="cartao_sus" value="{{ old('cartao_sus') }}" id="input13" required placeholder="">
                                    <small class="c-field__message">
                                        <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                    </small>
                                </div>


                            <div class="row" style ="margin-top:20px;">
                                <div class="col-4 offset-4 u-mb-medium">
                                    <button type="submit" class="c-btn c-btn--info c-btn--fullwidth" >Enviar Dados</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </form>
                </div><!-- // .row -->
@endsection