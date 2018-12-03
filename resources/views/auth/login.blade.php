<!doctype html>
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Login | Template Admin</title>
        <meta name="description" content="Dashboard UI Kit">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- Google Font -->
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600" rel="stylesheet">

        <!-- Favicon -->
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">

        <!-- Stylesheet -->
        <link rel="stylesheet" href="{{asset('css/main.min.css')}}">
    </head>
    <body class="o-page o-page--center">
        <!--[if lte IE 9]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience and security.</p>
        <![endif]-->

        <div class="o-page__card">
            <div class="c-card u-mb-xsmall">
                <header class="c-card__header u-pt-large">
                    <a class="c-card__icon" href="#!">
                        <img src="img/logo-login.svg" alt="Dashboard UI Kit">
                    </a>
                    <h1 class="u-h3 u-text-center u-mb-zero">Bem vindo! Faça seu Login.</h1>
                </header>
                
                <form class="c-card__body" action="{{ route('login') }}" method="POST">
                    @csrf
                    <div class="c-field u-mb-small">
                        <label class="c-field__label" for="input1">Entre com seu endereço de email</label> 
                        <input class="c-input"  name="email" type="email" id="input1" placeholder="teste@teste.com"> 
                    </div>

                    <div class="c-field u-mb-small">
                        <label class="c-field__label" for="input2">Senha</label> 
                        <input class="c-input" name="password" type="password" id="input2" placeholder="Entre com sua Senha"> 
                    </div>

                    <button class="c-btn c-btn--info c-btn--fullwidth" type="submit">Entrar no painel ADMIN</button>    
                </form>
            </div>

            <div class="o-line">
                <a class="u-text-mute u-text-small" href="{{route('register')}}">Não possui uma conta ?</a>
                <a class="u-text-mute u-text-small" href="forgot-password.html">Esqueceu a senha?</a>
            </div>
        </div>

        <script src="{{asset('js/main.min.js')}}"></script>
    </body>
</html>