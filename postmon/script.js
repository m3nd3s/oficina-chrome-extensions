var postmon = {
  query: function(){
    var $cep = $("#cep");
    var $endereco_tag = $("#endereco");

    $.ajax({
      url: "http://api.postmon.com.br/v1/cep/" + $cep.val(),
      type: "GET",
      cache: false,
      dataType: "json"
    })
    .done(function(data){
      var html = "Log: " + data.logradouro + "<br />";
      html += "Bairro: " + data.bairro + "<br />";
      html += "Cidade: " + data.cidade + "<br />";
      $endereco_tag.html(html);
    });
  }
}

$("#consultar").click(function(e){
  e.preventDefault();
  postmon.query();
});
