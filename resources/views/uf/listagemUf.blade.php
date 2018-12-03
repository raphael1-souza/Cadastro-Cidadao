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
                                        <h4 class="u-mb-xsmall" style="padding-bottom:20px;padding-top:-10px;">Listagem de UF</h4>
                                    </div>
                                </div>
                            </div>
            <div class="row u-mb-medium">
                <div class="col-sm-12">

                    <div class="c-table-responsive@desktop">
                        <table class="c-table c-table--zebra u-mb-small" id="datatable2">
                            <thead class="c-table__head">
                                <tr class="c-table__row">
                                  <th class="c-table__cell c-table__cell--head">Código UF</th>
                                  <th class="c-table__cell c-table__cell--head">Descrição UF</th>
                                  <th class="c-table__cell c-table__cell--head">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                            @foreach($uf as $v)
                                <tr class="c-table__row c-table__row--danger">
                                    <td class="c-table__cell">{{$v->codigo_uf}}</td>
                                    <td class="c-table__cell">{{$v->descricao_uf}}</td>
                                    <td class="c-table__cell">
                                    <a class="c-btn c-btn--warning" data-toggle="modal" data-target="#editar{{$v->codigo_uf}}"  title='Editar'><i class="fa fa-pencil-square-o u-mr-xsmall"></i>Editar</a>
                                    <a class="c-btn c-btn--danger" data-toggle="modal" data-target="#deletar{{$v->codigo_uf}}" title='Editar' ><i class="fa fa-trash-o u-mr-xsmall"></i>Deletar</a>


                                      <div class="c-modal c-modal--small modal fade" id="editar{{$v->codigo_uf}}" tabindex="-1" role="dialog" aria-labelledby="editar{{$v->codigo_uf}}" data-backdrop="static">
                                          <div class="c-modal__dialog modal-dialog" role="document">
                                              <div class="c-modal__content">
                                                  
                                                  <div class="c-modal__header">
                                                      <h3 class="c-modal__title">Editar um Registro</h3>

                                                      <span class="c-modal__close" data-dismiss="modal" aria-label="Close">
                                                          <i class="fa fa-close"></i>
                                                      </span>
                                                  </div>

                                                  <div class="c-modal__body">
                                                  <form action="{{route('update.uf',['$codigo_uf'=>$v->codigo_uf])}}" method="POST" >
                                                        {{csrf_field()}}
                                                        <div class="row">

                                                        <div class="col-md-12">
                                                            <div class="c-field">
                                                                <label class="c-field__label" for="input13">Código do Vínculo: </label>
                                                                <input class="c-input" type="text" name="codigo_uf" value="{{$v->codigo_uf}}" id="input13" readonly >
                                                                <small class="c-field__message">
                                                                    <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                                                </small>
                                                            </div>
                                                            <div class="row">
                                                                <div class="c-field col-md-12 u-mb-medium">
                                                                    <label class="c-field__label" for="input13">Descrição: </label>
                                                                    <input class="c-input" type="text" name="descricao_uf" id="input13" value="{{$v->descricao_uf}}" required placeholder="">
                                                                    <small class="c-field__message">
                                                                        <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                                                    </small>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                  </div>

                                                  <div class="c-modal__footer u-justify-center">
                                                      <button class="c-btn c-btn--success" type="submit">Atualizar</button>
                                                  </div>
                                                  </form>

                                              </div><!-- // .c-modal__content -->
                                          </div><!-- // .c-modal__dialog -->
                                      </div><!-- // .c-modal -->
                                      <div class="col-sm-4 u-mb-medium">
                                      <div class="c-modal c-modal--small modal fade" id="deletar{{$v->codigo_uf}}" tabindex="-1" role="dialog" aria-labelledby="deletar{{$v->codigo_uf}}" data-backdrop="static">
                                          <div class="c-modal__dialog modal-dialog" role="document">
                                              <div class="c-modal__content">
                                                  
                                                  <div class="c-modal__header">
                                                      <h3 class="c-modal__title">Deletar Registro</h3>

                                                      <span class="c-modal__close" data-dismiss="modal" aria-label="Close">
                                                          <i class="fa fa-close"></i>
                                                      </span>
                                                  </div>
                                                  <div class="c-modal__body ">
                                                  <div class="col-sm-4">
                                                  <p style="color: black;padding-right:10px;" class="c-field u-mb-xsmall">Você possui certeza de excluir a UF {{$v->descricao_uf}}? </p>
                                                  </div>
                                                  </div>

                                                  <div class="c-modal__footer u-justify-center">
                                                  <a  class="c-btn c-btn--primary" href="{{ url('/deletar/uf',['$codigo_uf'=>$v->codigo_uf]) }}">Prosseguir</a>
                                                  <a  class="c-btn c-btn--default" data-dismiss="modal">Voltar</a>
                                                  </div>

                                              </div><!-- // .c-modal__content -->
                                          </div><!-- // .c-modal__dialog -->
                                      </div><!-- // .c-modal -->
                                      </div>

                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
                </div><!-- // .row -->
@endsection