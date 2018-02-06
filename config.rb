###
# Blog settings
###

set :site_title, data.site.name
set :site_url, data.site.domain
Time.zone = data.site.timezone || "UTC"

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Syntax highlighting
#activate :syntax

activate :directory_indexes
activate :livereload
set :relative_links, true

# Set HAML to render HTML5 by default (when unspecified)
# It's important HAML outputs "ugly" HTML to not mess with code blocks
set :haml, :format => :html5, :ugly => true

# Set Markdown features for RedCarpet
# (So our version of Markdown resembles GitHub's)
set :markdown_engine, :kramdown
set :markdown,
  :tables => true,
  :autolink => true,
#  :gh_blockcode => true,
  :fenced_code_blocks => true,
  :smartypants => true,
  :lax_spacing => true
#set :asciidoctor,
#  :toc => true,
#  :numbered => true

# Directories
set :css_dir, 'css'
set :js_dir, 'js'
set :images_dir, 'images'
set :layouts_dir, 'layouts'
set :build_dir, 'build' #'../github.racefpv'


activate :blog do |blog|
  # blog.prefix = "blog"
  # blog.permalink = ":year/:month/:day/:title.html"
  # blog.sources = ":year-:month-:day-:title.html"
  # blog.taglink = "tags/:tag.html"
  # blog.layout = "layout"
  # blog.summary_separator = /(READMORE)/
  # blog.summary_length = 250
  # blog.year_link = ":year.html"
  # blog.month_link = ":year/:month.html"
  # blog.day_link = ":year/:month/:day.html"
  # blog.default_extension = ".markdown"
  blog.prefix = "blog"
  blog.permalink = ":year-:month-:day-:title/index.html" #isn't that what automatic directory indexes shoudl do?
  blog.layout = "post"
  blog.default_extension = ".markdown.erb"
  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  blog.paginate = true
  blog.per_page = 20
  blog.page_link = "page/:num"
end

# Enable blog layout for all blog pages
with_layout :post do
  page "/blog.html"
  page "/blog/*"
end

page "/feed.xml", :layout => false
proxy "/log/index.html", "/feed.xml", :layout => false

activate :google_analytics do |ga|
  ga.tracking_id = 'UA-68811788-1'
end


### 
# Compass
###

# Susy grids in Compass
# First: gem install susy
# require 'susy'

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

page "/miniquad101/*", :layout => "page"
page "/video101.html", :layout => "page"
page "/hangar.html", :layout => "page"
page "/", :layout => "page"

# Per-page layout changes:
# 
# With no layout
# page "/path/to/file.html", :layout => false
# 
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
# 
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy (fake) files
# page "/this-page-has-no-template.html", :proxy => "/template-file.html" do
#   @which_fake_page = "Rendering a fake page with a variable"
# end

###
# Helpers
###

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

helpers do
  def list_directory(dir)
    # ...do something here...
    soubory = Dir.glob(dir).map do |s|
      s.gsub(/source\//,'/')
    end
    return soubory
  end
  
  def normalize_url(dirty_URL)
    r = url_for Middleman::Util.normalize_path(dirty_URL)
    r.sub(/\/$/, '')
  end
  
  def youtube(hash, description)
    "<p>
    <iframe width='100%' height='500' src='https://www.youtube.com/embed/#{hash}' frameborder='0' allowfullscreen>
    <a href='https://www.youtube.com/watch?v=#{hash}'></a>#{description}</iframe>
    </p>"
  end
  
  def vimeo(hash, description)
    "<p class='image full'>
    <iframe src='https://player.vimeo.com/video/#{hash}' height='500' class='image full' frameborder='0'
    webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    <small><a href='https://vimeo.com/#{hash}'>#{description}</a> from <a href='https://vimeo.com/jimmacfx'>jimmac</a> on <a href='https://vimeo.com'>Vimeo</a>.</small>
    </p>"
  end
  
  def img(file, description, cls='full')
    cesta = blog.articles[0].path.gsub(/\.html$/,'')
    "<p class='image #{cls}'>
      <img alt='#{description}' src='/#{cesta}/index/#{file}'>
      <small>#{description}</small>
    </p>"
  end
end

#activate :thumbnailer,
#  :dimensions => {
#  :small => '200x',
#  :medium => '400x',
#},
#:include_data_thumbnails => false,
#:namespace_directory => %w(blog/**)

# Build-specific configuration
configure :build do
  # Minify Javascript and CSS on build
  activate :minify_javascript
  activate :minify_css
  activate :gzip

  ignore  'stuff/*'
  ignore '*tar.xz'
  # Enable cache buster
  # activate :cache_buster
  
  # Use relative URLs
  activate :relative_assets
  
  # Compress PNGs after build
  # First: gem install middleman-smusher
  # require "middleman-smusher"
  # activate :smusher
  
  # Or use a different image path
  # set :http_path, "/Content/images/"
end

#if data.site.rsync
#  rsync = URI.parse(data.site.rsync)
#
#  deploy_config = {
#    method: :rsync,
#    user: rsync.user || ENV[:USER],
#    host: rsync.host,
#    path: rsync.path,
#    port: rsync.port || 22,
#    clean: false, # remove orphaned files on remote host
#    build_before: false # default false
#  }
#end

#activate :deploy do |deploy|
#  deploy_config.each {|key, val| deploy[key] = val }
#end

#Deploy to git
activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  deploy.remote   = 'github-deploy' #'git@github.com:jimmac/racefpv.eu.git'
  #deploy.branch   = 'gh-pages' # default: gh-pages
  #deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  deploy.commit_message = 'deploy generated commit'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end
