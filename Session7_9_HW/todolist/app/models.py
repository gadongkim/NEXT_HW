from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    date = models.DateField(null=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, null=True, related_name ='posts')

    def __str__(self):
        return self.title

# .CASCADE : 포스트가 삭제 되면 댓글도 전부 삭제된다.
class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name ='comments')
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.CASCADE, default=None, related_name='comments')

