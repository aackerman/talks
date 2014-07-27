module Shippable
  def self.method_added(method_name)
    puts "#{method_name} is now available!"
  end

  def shipit!; end
end
