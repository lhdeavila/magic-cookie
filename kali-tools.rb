#!/usr/bin/env ruby
require 'nokogiri'
require 'httparty'

def scraper(url)
  unparse = HTTParty.get(url)
  parse = Nokogiri::HTML(unparse.body)
  return parse
end

def main
  get_index = scraper("https://www.kali.org/tools/")
  get_content = get_index.css('div.card')
  get_list = get_content.css('li')
  counter = get_list.count
  cnt = 0

  while counter > cnt

    tool_url = get_list.css("a")[cnt]["href"]

    if tool_url.match(/#/)
      cnt += 1
    else
      get_tool_page = scraper(tool_url)

      tool = {
        id: cnt,
        tool: get_list.css('a')[cnt].text,
        description: get_tool_page.css('p').text,
        url: tool_url
      }

      puts "{"
      tool.each do |k, v|
        puts "\t\t\"#{k}\": \"#{v}\""
      end
      puts "},"

      cnt += 1
    end
  end
end

main
