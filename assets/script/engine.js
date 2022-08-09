'use strict';

// ----------------------------------------------------------------------------------  VAR  ----

var article_timeout;
var article_inital = 8000;
var article_delay = 5000;
var article_array;
var article_total;

// ---------------------------------------------------------------------------------  INIT  ----

function init() {
    init_control();
    init_article();
    $('html').removeClass('status_init');
}
$(init);

function init_control() {
    $('header .toggle').on('click', function() {
        $('html').toggleClass('view_info');
    });
    $('article').on('click', run_article);
    
}

function init_article() {
    article_array = $('article');
    article_total = article_array.length;
    article_timeout = setTimeout(run_article, article_inital);
}

// ----------------------------------------------------------------------------------  RUN  ----

function run_article() {
    clearTimeout(article_timeout);
    var article_current = $('article.display');
    if (article_current.length > 0) {
        var this_index = article_array.index(article_current);
        var this_target = this_index + 1;
        if (this_target === article_total) {
            this_target = 0;
        }
        var article_target = article_array.eq(this_target);
        article_current.removeClass('display');
        article_target.addClass('display');
    } else {
        article_array.eq(0).addClass('display');
    }
    article_timeout = setTimeout(run_article, article_delay);
}
