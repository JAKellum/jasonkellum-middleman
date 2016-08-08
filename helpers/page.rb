module Page
  def pages
    [
      :wayfind,
      :onespark,
      # :ibm,
      # :phil,
      :resumebot,
      :ignite,
      :txtout,
      :aiga,
      :matchstiq,
      :asps,
      :catalyst,
      :oppify,
      :trucknseek,
      :combofonts,
      :spinnaker,
      :metrology,
      :traverse,
      :bistro23,
      :rumble,
      :browndog
    ]
  end

  def page_names
    pages.map(&:to_s)
  end

  def next_page_of(name)
    index = pages.index(name.to_sym)
    return '' unless index.present?

    next_index = (index + 1) % pages.length
    pages[next_index].to_s
  end

  def prev_page_of(name)
    index = pages.index(name.to_sym)
    return '' unless index.present?

    prev_index = (index - 1) % pages.length
    pages[prev_index].to_s
  end
end
