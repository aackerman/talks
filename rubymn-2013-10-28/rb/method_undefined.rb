module Shippable
  def self.method_undefined(method_name)
    puts "#{method_name} was undefined!"
  end

  def shipit!; end

  undef_method :shipit!
end
