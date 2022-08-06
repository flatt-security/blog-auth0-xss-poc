require 'sinatra'
require 'json'

before do
  headers(
    'Access-Control-Allow-Origin' => '*',
    'Access-Control-Allow-Headers' => request.env['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'].to_s
  )
end

post '/' do
  res = "request body: #{request.body.read}"
  puts res
  return res
end

options '/' do
end
