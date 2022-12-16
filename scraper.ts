import { load } from "cheerio";

export const fetcher = async (value?: undefined | string) => {
  var titleArray = [];
  var contentArray = [];
  var inshortsData = {};
  var title;
  var content;
  var resultObj = [];
  var image = [];
  var time = [];
  var date = [];
  var links = [];
  const fetchURL = !value
    ? "https://inshorts.com/en/read"
    : `https://inshorts.com/en/read/${value}`;
  const response = await fetch(fetchURL);
  const data = await response.text();
  const $ = load(data);
  $(".card-stack").each((i, el) => {
    title = $(el).find(".news-card-title a").find("span").text();

    titleArray = title.split("short");

    titleArray.splice(-1, 1);

    content = $(el)
      .find(".news-card-content")
      .find("div")
      .text()
      .trim()
      .replace(/short by .+\s\s+.+/gm, "ezpz")
      .trim();

    contentArray = content.split("ezpz");

    contentArray.splice(-1, 1);

    for (var i = 0; i < contentArray.length; i++) {
      contentArray[i] = contentArray[i].trim();
    }
  });

  $("[class='news-card-image']").each(function (i, elem) {
    var bg = $(this).css("background-image");
    image[i] = bg.replace(/.*\s?url\([\'\"]?/, "").replace(/[\'\"]?\).*/, "");
  });

  $("[itemprop='datePublished']").each(function (i, elem) {
    time[i] = $(this).text();
  });

  $("[class='date']").each(function (i, elem) {
    date[i] = $(this).text();
  });

  $("a[class='source']").each(function (i, elem) {
    links[i] = $(this).attr("href");
  });

  const returnData = titleArray.map((title, i) => {
    return {
      title,
      content: contentArray[i],
      imageUrl: image[i],
      date: date[i],
      time: time[i],
      readMoreUrl: links[i],
    };
  })


  return returnData;
};
