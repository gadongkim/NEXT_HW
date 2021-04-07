
def extract_info(movie_list) :
    final_result = []

    for movie in movie_list:
        title = movie.find("dt",{'class': 'tit'}).find('a').string
        score = movie.find("div",{'class': 'star_t1'}).find("span",{'class':'num'}).text
        image_src = movie.find("div", {"class" : "thumb"}).find("img")['src']

        text_info = movie.find("dl",{'class' : 'info_txt1'}).find_all("dd")

        if len(text_info) >= 3 :
            director = text_info[1].text.replace('\n','')
            date = text_info[0].text.split('|')[2].replace('\n','').replace('\t','').replace('\r','').replace('개봉','')
            actors = text_info[2].text.replace('\n','').replace('\t','').replace('\r','')
        else :
            director = text_info[1].text.replace('\n','')
            date = text_info[0].text.split('|')[2].replace('\n','').replace('\t','').replace('\r','').replace('개봉','')
            actors = None


        movie_info = {
            'title' : title,
            'score' : score,
            'image_src' : image_src,
            'director' : director,
            'actors' : actors,
            'date' : date
        }

        final_result.append(movie_info)
        # 꼭 for문 안에 담겨 있어야해

    return final_result

