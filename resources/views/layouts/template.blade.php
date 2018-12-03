<!doctype html>
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Cadastro Cidadão</title>
        <meta name="description" content="Dashboard UI Kit">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Google Font -->
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,600" rel="stylesheet">

        <!-- Favicon -->
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

        <!-- Stylesheet -->
        <link rel="stylesheet" href="{{asset('css/main.min.css')}}">
    </head>
    <body class="o-page">
        <!--[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->

        <div class="o-page__sidebar js-page-sidebar">
            <div class="c-sidebar">
                <a class="c-sidebar__brand" href="#">
                    <img class="c-sidebar__brand-img" src="{{asset('img/logo.png')}}" style="width:auto;" alt="Logo">Governo Federal
                </a>
                
                <h4 class="c-sidebar__title">Governo Federal</h4>
                <ul class="c-sidebar__list">

                    <li class="c-sidebar__item">
                        <a class="c-sidebar__link " href="{{url('/home')}}">
                            <i class="fa fa-home u-mr-xsmall"></i>Home
                        </a>
                    </li>
                    <li class="c-sidebar__item">
                        <a class="c-sidebar__link" href="{{route('cidadao')}}">
                            <i class="fa fa-address-book-o u-mr-xsmall"></i>Realizar Cadastro Cidadão
                        </a>
                    </li>
                </ul>    
                <ul>
                    <li class="c-sidebar__item has-submenu">
                        <a class="c-sidebar__link" data-toggle="collapse" href="#sidebar-vinculo" aria-expanded="false" aria-controls="sidebar-submenu">
                            <i class="fa fa-money u-mr-xsmall"></i>Vínculos
                        </a>
                        <ul class="c-sidebar__submenu collapse" id="sidebar-vinculo">
                            <li><a class="c-sidebar__link" href="{{route('vinculo')}}">Cadastrar Vínculos</a></li>
                            <li><a class="c-sidebar__link" href="{{route('listar.vinculo')}}">Listar Vínculos</a></li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li class="c-sidebar__item has-submenu">
                        <a class="c-sidebar__link" data-toggle="collapse" href="#sidebar-genero" aria-expanded="false" aria-controls="sidebar-submenu">
                            <i class="fa fa-venus-mars u-mr-xsmall"></i>Gênero
                        </a>
                        <ul class="c-sidebar__submenu collapse" id="sidebar-genero">
                            <li><a class="c-sidebar__link" href="{{route('genero')}}">Cadastrar Gêneros</a></li>
                            <li><a class="c-sidebar__link" href="{{route('listar.genero')}}">Listar Gêneros</a></li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li class="c-sidebar__item has-submenu">
                        <a class="c-sidebar__link" data-toggle="collapse" href="#sidebar-raca" aria-expanded="false" aria-controls="sidebar-submenu">
                            <i class="fa fa-users u-mr-xsmall"></i>Raça
                        </a>
                        <ul class="c-sidebar__submenu collapse" id="sidebar-raca">
                            <li><a class="c-sidebar__link" href="{{route('raca')}}">Cadastrar Raça</a></li>
                            <li><a class="c-sidebar__link" href="{{route('listar.raca')}}">Listar Raça</a></li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li class="c-sidebar__item has-submenu">
                        <a class="c-sidebar__link" data-toggle="collapse" href="#sidebar-escolaridade" aria-expanded="false" aria-controls="sidebar-submenu">
                            <i class="fa fa-graduation-cap u-mr-xsmall"></i>Escolaridade
                        </a>
                        <ul class="c-sidebar__submenu collapse" id="sidebar-escolaridade">
                            <li><a class="c-sidebar__link" href="{{route('escolaridade')}}">Cadastrar Escolaridade</a></li>
                            <li><a class="c-sidebar__link" href="{{route('listar.escolaridade')}}">Listar Escolaridade</a></li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li class="c-sidebar__item has-submenu">
                        <a class="c-sidebar__link" data-toggle="collapse" href="#sidebar-estados" aria-expanded="false" aria-controls="sidebar-submenu">
                            <i class="fa fa-map u-mr-xsmall"></i>Estados
                        </a>
                        <ul class="c-sidebar__submenu collapse" id="sidebar-estados">
                            <li><a class="c-sidebar__link" href="{{route('uf')}}">Cadastrar Estados</a></li>
                            <li><a class="c-sidebar__link" href="{{route('listar.uf')}}">Listar Estados</a></li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li class="c-sidebar__item has-submenu">
                        <a class="c-sidebar__link" data-toggle="collapse" href="#sidebar-estadocivil" aria-expanded="false" aria-controls="sidebar-submenu">
                            <i class="fa fa-street-view u-mr-xsmall"></i>Estado Civil
                        </a>
                        <ul class="c-sidebar__submenu collapse" id="sidebar-estadocivil">
                            <li><a class="c-sidebar__link" href="{{route('estadocivil')}}">Cadastrar Estado Civil</a></li>
                            <li><a class="c-sidebar__link" href="{{route('listar.estadocivil')}}">Listar Estados Civis</a></li>
                        </ul>
                    </li>
                </ul>

                <ul>
                    <li class="c-sidebar__item has-submenu">
                        <a class="c-sidebar__link" data-toggle="collapse" href="#sidebar-ocupacao" aria-expanded="false" aria-controls="sidebar-submenu">
                            <i class="fa fa-wrench u-mr-xsmall"></i>Ocupação
                        </a>
                        <ul class="c-sidebar__submenu collapse" id="sidebar-ocupacao">
                            <li><a class="c-sidebar__link" href="{{route('ocupacao')}}">Cadastrar Ocupação</a></li>
                            <li><a class="c-sidebar__link" href="{{route('listar.ocupacao')}}">Listar Ocupação</a></li>
                        </ul>
                    </li>
                </ul>

            </div><!-- // .c-sidebar -->
        </div><!-- // .o-page__sidebar -->

        <main class="o-page__content">
            <header class="c-navbar u-mb-medium">
                <button class="c-sidebar-toggle u-mr-small">
                    <span class="c-sidebar-toggle__bar"></span>
                    <span class="c-sidebar-toggle__bar"></span>
                    <span class="c-sidebar-toggle__bar"></span>
                </button><!-- // .c-sidebar-toggle -->

                <h2 class="c-navbar__title u-mr-auto">Conta</h2>
                

                <div class="c-dropdown dropdown">
                    <a  class="c-avatar c-avatar--xsmall has-dropdown dropdown-toggle" href="#" id="dropdwonMenuAvatar" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img class="c-avatar__img" src="{{asset('img/avatar-72.jpg')}}" alt="User's Profile Picture">
                    </a>

                    <div class="c-dropdown__menu dropdown-menu dropdown-menu-right" aria-labelledby="dropdwonMenuAvatar">
                        <a class="c-dropdown__item dropdown-item" href="#">Editar Perfil</a>
                        <a class="c-dropdown__item dropdown-item" href="#">Sair</a>
                    </div>
                </div>
            </header>

            <div class="container-fluid">
                
            @yield('conteudo')


            </div><!-- // .container -->
            
        </main><!-- // .o-page__content -->
        
        <script src="{{asset('js/main.min.js')}}"></script>
        <script src="{{asset('js/input-mask/jquery.inputmask.js')}}"></script>
        <script src="{{asset('js/input-mask/jquery.inputmask.extensions.js')}}"></script>
        <script src="{{asset('js/input-mask/jquery.inputmask.date.extensions.js')}}"></script>
        <script src="{{asset('js/input-mask/jquery.inputmask.numeric.extensions.js')}}"></script>
        <script src="{{asset('js/input-mask/jquery.inputmask.phone.extensions.js')}}"></script>
        
        <script>
            $('input[name="beneficio"]').change(function () {
                if ($('input[name="beneficio"]:checked').val() === "sim") {
                    $('.camposExtras').show();
                } else {
                    $('.camposExtras').hide();
                }
            });
        </script>

    <script>
        $(document).ready(function(){
        $("#money").inputmask('decimal', {
                    'alias': 'numeric',
                    'groupSeparator': '.',
                    'autoGroup': true,
                    'digits': 2,
                    'radixPoint': ".",
                    'digitsOptional': false,
                    'allowMinus': false,
                    'prefix': 'R$ ',
        });
        });
</script>
<script>
        $(document).ready(function(){
        $("#money1").inputmask('decimal', {
                    'alias': 'numeric',
                    'groupSeparator': '.',
                    'autoGroup': true,
                    'digits': 2,
                    'radixPoint': ".",
                    'digitsOptional': false,
                    'allowMinus': false,
                    'prefix': 'R$ ',
        });
        });
</script>
<script>
        $(document).ready(function(){
        $("#money2").inputmask('decimal', {
                    'alias': 'numeric',
                    'groupSeparator': '.',
                    'autoGroup': true,
                    'digits': 2,
                    'radixPoint': ".",
                    'digitsOptional': false,
                    'allowMinus': false,
                    'prefix': 'R$ ',
        });
        });
</script>
    </body>
</html>