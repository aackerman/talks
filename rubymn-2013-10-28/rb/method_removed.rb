module Shippable
  def self.method_removed(method_name)
    puts "#{method_name} is was removed!"
  end

  def shipit!; end

  remove_method :shipit!
end
