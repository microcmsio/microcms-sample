require 'open-uri'

module MicroCMS
  class Generator < Jekyll::Generator
    def generate(site)
      # ニュースを取得
      result = JSON.load(open("https://test.microcms.io/api/v1/sample_news",
        "X-API-KEY" => "f573f510-1cdf-40e2-90fa-37f37b9b2639"
      ).read)

      # レイアウト側で使えるようにsite.dataに値を入れておく
      site.data.merge!({ "news" => result['contents'] })

      # ニュース詳細画面を作成
      result['contents'].each do |news|
        site.pages << NewsPage.new(site, site.source, File.join('news', news['id']), news)
      end
    end
  end

  class NewsPage < Jekyll::Page
    def initialize(site, base, dir, news)
        @site = site
        @base = base
        @dir  = dir
        @name = 'index.html'
  
        self.process(@name)
        self.read_yaml(File.join(base, '_layouts'), 'news_index.html')
        self.data['news'] = news
      end
  end
end