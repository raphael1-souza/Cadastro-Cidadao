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

                    
                        <div class="c-card u-p-medium">
                            <div class="row u-justify-center">
                                <div class="col-md-7">
                                    <div class="u-mt-large u-text-center">
                                        <h4 class="u-mb-xsmall" style="padding-bottom:20px;padding-top:-10px;">Listagem de Cidadões</h4>
                                    </div>
                                </div>
                            </div>
            <div class="row u-mb-medium">
                <div class="col-sm-12">

                    <div class="c-table-responsive@desktop">
                        <table class="c-table c-table--zebra u-mb-small" id="datatable2">
                            <thead class="c-table__head">
                                <tr class="c-table__row">
                                  <th class="c-table__cell c-table__cell--head">CPF</th>
                                  <th class="c-table__cell c-table__cell--head">Nome</th>
                                  <th class="c-table__cell c-table__cell--head">Nome da Mãe</th>
                                  <th class="c-table__cell c-table__cell--head">Data Nascimento</th>
                                  <th class="c-table__cell c-table__cell--head">Escolaridade</th>
                                  <th class="c-table__cell c-table__cell--head">Ocupação</th>
                                  <th class="c-table__cell c-table__cell--head">UF</th>

                                  <th class="c-table__cell c-table__cell--head">Ações</th>
                                </tr>
                            </thead>

                            <tbody>
                            @foreach($cidadao as $v)
                                <tr class="c-table__row c-table__row--danger">
                                    <td class="c-table__cell">{{$v->cpf}}</td>
                                    <td class="c-table__cell">{{$v->nome_cidadao}}</td>
                                    <td class="c-table__cell">{{$v->nome_mae}}</td>
                                    <td class="c-table__cell">{{date_format(date_create_from_format('Y-m-d',$v->data_nasc),'d/m/Y')}}</td>
                                    <td class="c-table__cell">{{$v->escolaridade()->first()->codigo_escolaridade}} - {{$v->escolaridade()->first()->descricao_escolaridade}}</td>
                                    <td class="c-table__cell">{{$v->ocupacao()->first()->codigo_ocupacao}} - {{$v->ocupacao()->first()->descricao_ocupacao}}</td>
                                    <td class="c-table__cell">{{$v->codigo_uf}}</td>
                                    <td class="c-table__cell">
                                    <a class="c-btn c-btn--warning" data-toggle="modal" data-target="#editar{{$v->cpf}}"  title='Editar'><i class="fa fa-pencil-square-o u-mr-xsmall"></i>Editar</a>
                                    <a class="c-btn c-btn--danger" data-toggle="modal" data-target="#deletar{{$v->cpf}}" title='Deletar' ><i class="fa fa-trash-o u-mr-xsmall"></i>Deletar</a>


                                      <div class="c-modal c-modal--small modal fade" id="editar{{$v->cpf}}" tabindex="-1" role="dialog" aria-labelledby="editar{{$v->cpf}}" data-backdrop="static">
                                          <div class="c-modal__dialog modal-dialog" role="document">
                                              <div class="c-modal__content">
                                                  
                                                  <div class="c-modal__header">
                                                      <h3 class="c-modal__title">Editar um Registro</h3>

                                                      <span class="c-modal__close" data-dismiss="modal" aria-label="Close">
                                                          <i class="fa fa-close"></i>
                                                      </span>
                                                  </div>

                                                  <div class="c-modal__body">
                                                  <form action="{{route('update.cidadao',['$cpf'=>$v->cpf])}}" method="POST" >
                                                        {{csrf_field()}}
                                                        <div class="row">

                                                        <div class="col-md-12">
                                                        <div class="c-field">
                                                            <label class="c-field__label" for="input13">Nome do Cidadão: </label>
                                                            <input class="c-input" type="text" name="nome_cidadao" id="input13" required value="{{$v->nome_cidadao}}" placeholder="">
                                                            <small class="c-field__message">
                                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                                            </small>
                                                        </div>
                                                        <div class="row">
                                                            <div class="c-field col-md-12 u-mb-medium">
                                                                <label class="c-field__label" for="input13">Nome Social: </label>
                                                                <input class="c-input" type="text" name="nome_social" id="input13" value="{{$v->nome_social}}" placeholder="">
                                                            </div>
                                                        </div>
                                                        <div class="c-field">
                                                            <label class="c-field__label" for="input13">Nome da Mãe: </label>
                                                            <input class="c-input" type="text" name="nome_mae" id="input13" value="{{$v->nome_mae}}" required placeholder="">
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
                                                                    <input class="c-input" data-toggle="datepicker" name="data_nasc" id="input9" value="{{date_format(date_create_from_format('Y-m-d',$v->data_nasc),'d/m/Y')}}" type="text" required placeholder="Abra o calendário">
                                                                </div>
                                                            </div>
                                                            <div class="c-field col-md-5 u-mb-medium">
                                                                <label class="c-field__label" for="input13">Sexo: </label>
                                                                <div class ="row">
                                                                <div class="c-choice c-choice--radio " style="margin-right:5px;">
                                                                @if($v->sexo == 'm')
                                                                    <input class="c-choice__input" value="m" id="radio1" name="sexo" checked type="radio">
                                                                    <label class="c-choice__label" for="radio1">Masculino</label>
                                                                @else
                                                                    <input class="c-choice__input" value="m" id="radio1" name="sexo"  type="radio">
                                                                    <label class="c-choice__label" for="radio1">Masculino</label>
                                                                @endif
                                                                </div>
                                                                <div class="c-choice c-choice--radio">
                                                                @if($v->sexo == 'f')
                                                                    <input class="c-choice__input"  value="f" id="radio2" name="sexo" checked type="radio">
                                                                    <label class="c-choice__label" for="radio2">Feminino</label>
                                                                @else
                                                                    <input class="c-choice__input"  value="f" id="radio2" name="sexo" type="radio">
                                                                    <label class="c-choice__label" for="radio2">Feminino</label>
                                                                @endif
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                                <label class="c-field__label" for="select2">Gênero Declarado</label>

                                                                <!-- Select2 jquery plugin is used -->
                                                                <select class="c-select has-search" required name="codigo_genero" id="genero{{$v->cpf}}">
                                                                <option selected value="{{$v->genero()->first()->codigo_genero}}">{{$v->genero()->first()->descricao_genero}}</option>
                                                                    @foreach($genero as $g)
                                                                        <option value="{{$g->codigo_genero}}">{{$g->descricao_genero}}</option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                                <label class="c-field__label" for="select2">UF de Nascimento</label>

                                                                <!-- Select2 jquery plugin is used -->
                                                                <select class="c-select has-search" required name="codigo_uf" id="uf{{$v->cpf}}">
                                                                <option selected value="{{$v->uf()->first()->codigo_uf}}">{{$v->uf()->first()->descricao_uf}}</option>
                                                                    @foreach($uf as $u)
                                                                        <option value="{{$u->codigo_uf}}">{{$u->codigo_uf}} - {{$u->descricao_uf}}</option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                                <label class="c-field__label" for="select2">Raça/cor</label>

                                                                <!-- Select2 jquery plugin is used -->
                                                                <select class="c-select has-search" name="codigo_raca" required id="raca{{$v->cpf}}">
                                                                <option selected value="{{$v->raca()->first()->codigo_raca}}">{{$v->raca()->first()->descricao_raca}}</option>
                                                                    @foreach($raca as $r)
                                                                        <option value="{{$r->codigo_raca}}">{{$r->descricao_raca}}</option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                                <label class="c-field__label" for="select2">Estado civil</label>

                                                                <!-- Select2 jquery plugin is used -->
                                                                <select class="c-select has-search" name="codigo_ecivil"  required id="ecivil{{$v->cpf}}">
                                                                <option selected value="{{$v->estadoCivil()->first()->codigo_ecivil}}">{{$v->estadoCivil()->first()->descricao_ecivil}}</option>
                                                                    @foreach($ecivil as $ec)
                                                                        <option value="{{$ec->codigo_ecivil}}">{{$ec->descricao_ecivil}}</option>
                                                                    @endforeach
                                                                </select>
                                                            </div>
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                                <label class="c-field__label" for="select2">Escolaridade</label>

                                                                <!-- Select2 jquery plugin is used -->
                                                                <select class="c-select has-search" name="codigo_escolaridade" required id="escolaridade{{$v->cpf}}">
                                                                    <option selected value="{{$v->escolaridade()->first()->codigo_escolaridade}}">{{$v->escolaridade()->first()->descricao_escolaridade}}</option>
                                                                    @foreach($escolaridade as $e)
                                                                        <option value="{{$e->codigo_escolaridade}}">{{$e->descricao_escolaridade}}</option>
                                                                    @endforeach>
                                                                </select>
                                                            </div>
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                                <label class="c-field__label" for="select2">Ocupação</label>

                                                                <!-- Select2 jquery plugin is used -->
                                                                <select class="c-select has-search" name="codigo_ocupacao" required id="ocupacao{{$v->cpf}}">
                                                                <option selected value="{{$v->ocupacao()->first()->codigo_ocupacao}}">{{$v->ocupacao()->first()->descricao_ocupacao}}</option>
                                                                    @foreach($ocupacao as $o)
                                                                        <option value="{{$o->codigo_ocupacao}}">{{$o->descricao_ocupacao}}</option>
                                                                    @endforeach>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                                <label class="c-field__label" for="select2">Vínculo Empregatício</label>

                                                                <!-- Select2 jquery plugin is used -->
                                                                <select class="c-select has-search" name="codigo_vinculo"  required id="vinculo{{$v->cpf}}">
                                                                <option selected value="{{$v->vinculo()->first()->codigo_vinculo}}">{{$v->vinculo()->first()->descricao_vinculo}}</option>
                                                                    @foreach($vinculo as $a)
                                                                        <option value="{{$a->codigo_vinculo}}">{{$a->descricao_vinculo}}</option>
                                                                    @endforeach>
                                                                </select>
                                                            </div>
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                                <label class="c-field__label" for="input13">Renda individual: </label>
                                                                <input class="c-input" type="text" name="renda_individual" id="money1" value="{{$v->renda_individual}}" required placeholder="">
                                                                <small class="c-field__message">
                                                                    <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                                                </small>
                                                            </div>
                                                            <div class="c-field  col-md-4 u-mb-medium">
                                                            <label class="c-field__label" for="input13">Renda familiar: </label>
                                                                <input class="c-input" type="text" name="renda_familiar" id="money2" value="{{$v->renda_individual}}" required placeholder="">
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
                                                                @if($v->beneficio == 'sim')
                                                                    <input class="c-choice__input" value="sim" id="radio3" name="beneficio" checked type="radio">
                                                                    <label class="c-choice__label" for="radio3">Sim</label>
                                                                @else
                                                                    <input class="c-choice__input" value="sim" id="radio3" name="beneficio"  type="radio">
                                                                    <label class="c-choice__label" for="radio3">Sim</label>
                                                                @endif
                                                                </div>
                                                                <div class="c-choice c-choice--radio">
                                                                @if($v->beneficio == 'nao')
                                                                    <input class="c-choice__input" value="nao" id="radio4" name="beneficio" checked type="radio">
                                                                    <label class="c-choice__label" for="radio4">Não</label>
                                                                @else
                                                                    <input class="c-choice__input" value="nao" id="radio4" name="beneficio"  type="radio">
                                                                    <label class="c-choice__label" for="radio4">Não</label>
                                                                @endif
                                                                </div>
                                                                </div>
                                                            </div>

                                                            <div class="camposExtras col-md-8 ">
                                                                <div class="row">
                                                                <div class="c-field  col-md-6 u-mb-medium">
                                                                    <label class="c-field__label" for="input13">Qual Beneficio: </label>
                                                                    <input class="c-input" type="text" name="tipo_beneficio" id="input13"  placeholder="">
                                                                    <small class="c-field__message">
                                                                        <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                                                    </small>
                                                                </div>
                                                                <div class="c-field  col-md-6 u-mb-medium">
                                                                <label class="c-field__label" for="input13">Valor: </label>
                                                                    <input class="c-input" type="text" name="valor_beneficio" id="money"  placeholder="">
                                                                    <small class="c-field__message">
                                                                        <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                                                    </small>
                                                                </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="c-field">
                                                            <label class="c-field__label" for="input13">Cartão Nacional do SUS </label>
                                                            <input class="c-input" type="text" name="cartao_sus" id="input13" value="{{$v->cartao_sus}}" placeholder="">
                                                            <small class="c-field__message">
                                                                <i class="fa fa-info-circle"></i>Este campo é  obrigatório
                                                            </small>
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
                                      <div class="c-modal c-modal--small modal fade" id="deletar{{$v->cpf}}" tabindex="" role="dialog" aria-labelledby="deletar{{$v->cpf}}" data-backdrop="static">
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
                                                  <p style="color: black;padding-right:10px;" class="c-field u-mb-xsmall">Você possui certeza de excluir a Estado Civil {{$v->nome_cidadao}}? </p>
                                                  </div>
                                                  </div>

                                                  <div class="c-modal__footer u-justify-center">
                                                  <a  class="c-btn c-btn--primary" href="{{ url('/deletar/cidadao',['$cpf'=>$v->cpf]) }}">Prosseguir</a>
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
                            <div class="row" style ="margin-top:20px;">
                                <div class="col-4 offset-4  u-mb-medium">
                                <form action="{{route('ordemAlfabetica')}}" method="GET">
                                    <button type="submit" class="c-btn c-btn--info c-btn--fullwidth" >Ordem Alfabetica</button>
                                </form>
                                <form action="{{route('ordemEscolaridade')}}" method="GET">
                                    <button type="submit" class="c-btn c-btn--warning c-btn--fullwidth" >Ordem Escolaridade</button>
                                </form>
                                <form action="{{route('ordemIdade')}}" method="GET">
                                    <button type="submit" class="c-btn c-btn--success c-btn--fullwidth" >Ordem Idade</button>
                                </form>
                                </div>
                            </div>
                </div>
            </div>
                </div><!-- // .row -->
@endsection