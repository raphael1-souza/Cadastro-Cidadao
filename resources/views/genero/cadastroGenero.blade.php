@extends('layouts.template')
@section('conteudo')
@if(session('sucesso'))
    <div class="c-alert c-alert--success">
        <i class="c-alert__icon fa fa-check-circle"></i> {{session('sucesso')}}
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
                                        <h4 class="u-mb-xsmall" style="padding-bottom:20px;padding-top:-10px;">Cadastro Gênero</h4>
                                    </div>
                                </div>
                            </div>
                            <form action="{{route('cadastro.genero')}}" method="POST" >
                            {{csrf_field()}}
                            <div class="row">

                            <div class="col-md-12">
                                <div class="c-field">
                                    <label class="c-field__label" for="input13">Código do Gênero: </label>
                                    <input class="c-input" type="text" name="codigo_genero" id="input13" required placeholder="">
                                    <small class="c-field__message">
                                        <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                    </small>
                                </div>
                                <div class="row">
                                    <div class="c-field col-md-12 u-mb-medium">
                                        <label class="c-field__label" for="input13">Descrição: </label>
                                        <input class="c-input" type="text" name="descricao_genero" id="input13" required placeholder="">
                                        <small class="c-field__message">
                                            <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                        </small>
                                    </div>
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