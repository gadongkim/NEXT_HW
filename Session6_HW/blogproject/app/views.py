from django.shortcuts import render

# Create your views here.
from .models import Article
# Create your views here.
def index(request):
    # names=Name.objects.all()
    # return render(request, 'index.html',{'names': names})
    articles = Article.objects.all()
    return render(request, 'index.html',{'articles': articles})

def detail(request,article_pk):
    # name = Name.objects.get(pk=name_pk)
    # return render(request, 'detail.html,{'name':name})
    article = Article.objects.get(pk=article_pk)
    return render(request, 'detail.html', {'article':article})

def new(request):
    if request.method =='POST' :
        # post요청일경우
        print(request.POST) 
        # 모델에 새로운 인스턴스 생성시 모델.objects.create
        new_article = Article.objects.create(
            title = request.POST['title '],
            cotent = request.POST['post ']
        )
        return redirect('detail', article_pk = new_article.pk)
    
    return render(request, 'new.html')

     