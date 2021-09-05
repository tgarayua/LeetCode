require 'rubygems'
require 'httparty'

class RubyChallenge
    include HTTParty
    base_uri "https://takehome.io/twitter"

    def tweets
    self.class.get('window.json')
    end
end

ruby_challenge = RubyChallenge.new
puts ruby_challenge.tweets