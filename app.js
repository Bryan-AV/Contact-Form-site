

$("#myForm").submit(function(e) {

  if($("#nombre").val().length === 0 || $("#email").val().length === 0 || $("#telefono").val().length === 0
  || $("#asunto").val().length === 0 || $("#mensaje").val().length === 0 ) {
    alert("Ingrese la información requerida");
    // console.log("hola");
    return;
  }

  e.preventDefault(); // avoid to execute the actual submit of the form.

  
  var form = $(this);
  var url = form.attr('action');
  
  $.ajax({
         type: "POST",
         url: url,
         data: form.serialize(), // serializes the form's elements.
         success: function(data)
         {
          console.log('Submission was successful.');
                // console.log(data);
                if(alert('Su mensaje ha sido enviado, pronto nos pondremos en contacto con usted')){

                }else{
                   $('#myForm')[0].reset(); // to reset form data
                  window.location.reload();
                }     
                // alert("Su mensaje ha sido enviado");
               
            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
       });

  
});





//////////////////// ANIMACIONES////////////////////////




//////////////  ANIMACIONES EN EJE X Y Y
$(function () {
  var $blocks = $(".animBlock.notViewed");
  var $window = $(window);

  $window.on("scroll", function (e) {
    $blocks.each(function (i, elem) {
      if ($(this).hasClass("viewed")) return;

      isScrolledIntoView($(this));


    });
  });
});

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();
  var elemOffset = 0;

  

  if (elem.data("offset") != undefined) {
    elemOffset = elem.data("offset");
  }
  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height();

  if (elemOffset != 0) {
    // custom offset is updated based on scrolling direction
    if (docViewTop - elemTop >= 0) {
      // scrolling up from bottom
      elemTop = $(elem).offset().top + elemOffset;
    } else {
      // scrolling down from top
      elemBottom = elemTop + $(elem).height() - elemOffset;
    }
  }

  if (elemBottom <= docViewBottom + 100 && elemTop >= docViewTop) {
    //Fade in
    // $("#banner1").fadeIn(5000);

    // once an element is visible exchange the classes
    $(elem).removeClass("notViewed").addClass("viewed");

    // var animElemsLeft = $(".animBlock.notViewed").length;
    // if (animElemsLeft == 0) {
    //   // with no animated elements left debind the scroll event
    //   $(window).off("scroll");
    // }
 
  }
}



///////////////////VALIDACIONES//////////////////////////////
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

////////////////////////////////////BOTON GO TO TOP////////////////////////////////////
/////////////////////////////AGREGA PADDING CUANDO MENU ESTA EM TOP//////////////////////
//Get the button
var mybutton = document.getElementById("myBtn");

// window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  console.log(document.body.scrollTop);
}

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
var navbar = document.getElementById("mainNavbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;



function myFunction() {
  // When the user scrolls down 20px from the top of the document, show the button
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }

  // Agrega o quita el fixed-top
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("fixed-top");
  }
}

// ANIMACIONES DE FADE IN
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } 
    });
  }).scroll(); //invoke scroll-handler on page-load
});



// MENU

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var x = document.getElementById("myLinks");

function menuHamburguesa() {
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Cierra menu hamburguesa despues de un click
$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});
