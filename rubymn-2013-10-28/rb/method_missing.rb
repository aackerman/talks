class Container
  def method_missing(method_name)
    if method_name == :shipit!
      print <<-eos
         ,;:;;,
         ;;;;;
 .=',    ;:;;:,
/_', "=. ';:;:;
@=:__,  \,;:;:'
  _(\.=  ;:;;'
 `"_(  _/="`
  `"'``
      eos
    end
  end
end

Container.new.shipit!
