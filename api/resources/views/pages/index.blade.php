@extends('layouts.master')
@section('title', 'Netadım')
@section('content')
<div id="body">
    <input type="text" name="name" placeholder="Adınızı Giriniz">
    <button type="button" name="send">Gönder</button>
    <span id="result"></span>
</div>
@endsection
@section('script')
<script type="text/javascript">
    $('button[name="send"]').click(function(){
        $('#result').html($('input[name="name"]').val());
    })
</script>
@endsection
