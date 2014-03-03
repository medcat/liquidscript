RSpec::Matchers.define :compile do

  chain :and_produce do |prod|
    @prod = prod
  end

  match do |data|
    if @prod
      (@_out = compiler(data).compile) == @prod
    else
      @_out = compiler(data).compile?
    end
  end

  failure_message_for_should do |data|
    "expected #{data} to compile correctly"
  end

  failure_message_for_should_not do |data|
    "expected #{data} not to compile (compiled anyway, got: #{@_out})"
  end

  description do |data|
    "compile #{data}"
  end

  diffable

  def expected
    @prod
  end

  def actual
    if @_out
      @_out
    else
      []
    end
  end

  def compiler(data)
    Liquidscript::Compiler::ICR.new(Liquidscript::Scanner.new(data))
  end
end
