#!/usr/bin/env ruby
require "nokogiri"
require "httparty"
=begin
MODEL
"tool": {
        "id": "integer",
        "tool": "string",
        "description": "string",
        "url: string",
        }
=end

# main method
def scraper(url)
  unparse = HTTParty.get(url)
  parse = Nokogiri::HTML(unparse.body)
  return parse
end

def javascript_db_object(object)
  coma = Array.new
  coma = [",", ",", ",", ""]
  coma_counter = 0
  puts "\t{"
  object.each do |k, v|
    valor = "#{v}".gsub("\`", " ")
    valor = "#{valor}".delete("\"")
    valor = "#{valor}".delete("\'")
    valor = valor.tr("\n", "")
    puts "\t\t\"#{k}\": \"#{valor}\"#{coma[coma_counter]}"
    coma_counter += 1
  end
  puts "\t},"
end

def main
  get_index = scraper("https://www.kali.org/tools/")
  get_content = get_index.css("div.card ul")
  get_list = get_content.css("li")
  counter = get_list.count
  cnt = 0
  while cnt <= counter
    tool_url = get_list.css("a")[cnt]["href"]
    tool_url ? true : break
    # if url content hashtag
    if tool_url.match(/#/)
      cnt += 1
    else
      get_tool_page = scraper(tool_url)
      tool = {
        id: cnt,
        tool: get_list.css("a")[cnt].text,
        description: get_tool_page.css("p").text,
        url: tool_url,
      }
      puts javascript_db_object tool
      cnt += 1
    end
  end
end

def javascript_db_file
  puts "\n\nconst database = ["
  yield
  puts "];\n\nexport default database;"
end

javascript_db_file { main }

puts(%x{cd frontend && npm run dev})
