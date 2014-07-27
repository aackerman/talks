module Shippable
  def self.singleton_method_added(method_name)
    puts "#{method_name} added to #{self.name} as a singleton method"
  end

  def self.shipit!; end
end
