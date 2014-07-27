class Container
  def respond_to_missing?(method_name, include_private = false)
    method_name == :shipit! ? true : false
  end
end

Container.new.respond_to? :shipit!
