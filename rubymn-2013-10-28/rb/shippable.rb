module Shippable
  def self.method_added(method_name)
    puts "#{method_name} is now available!"
  end

  def self.method_removed(method_name)
    puts "#{method_name} method removed from #{name}"
  end

  def self.method_undefined(method_name)
    puts "#{method_name} method undefined in #{name}"
  end

  def self.singleton_method_added(method_name)
    puts "#{method_name} added to #{self.name} as a singleton method"
  end

  def self.singleton_method_removed(method_name)
    puts "#{method_name} removed from #{self.name} as a singleton method"
  end

  def self.singleton_method_undefined(method_name)
    puts "#{method_name} undefined from #{self.name} as a singleton method"
  end

  def self.ship!
    puts 'shipped!'
  end

  def pack
    puts 'packed!'
  end

  def label
    puts 'labeled!'
  end

  def destroy
    puts 'destroyed!'
  end

  def float
    puts 'floating'
  end

  remove_method :destroy
  undef_method :float
end
