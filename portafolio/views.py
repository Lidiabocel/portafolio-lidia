from django.shortcuts import render


def inicio(request):
    datos = {
        'nombre': 'Lidia Roxana Tuy Bocel'
    }

    return render(request, 'portafolio/inicio.html', datos)

def sobre_mi(request):
    datos = {
        'formacion': 'Técnico Universitario en Informática'
    }

    return render(request, 'portafolio/sobre_mi.html', datos)


def habilidades(request):
    datos = {
        'titulo': 'Mis habilidades'
    }

    return render(request, 'portafolio/habilidades.html', datos)

def proyectos(request):
    datos = {
        'titulo': 'Mis proyectos'
    }

    return render(request, 'portafolio/proyectos.html', datos)

def contacto(request):
    datos = {
        'titulo': 'Contacto'
    }

    return render(request, 'portafolio/contacto.html', datos)

def error_404(request, exception):
    datos = {
        'mensaje': 'La dirección que buscas no existe. Puedes regresar al inicio para continuar.'
    }

    return render(request, 'portafolio/404.html', datos, status=404)