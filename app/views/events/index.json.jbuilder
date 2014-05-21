json.array!(@events) do |event|
  json.extract! event, :id, :title, :description
  json.start event.start_time.in_time_zone("Eastern Time (US & Canada)")
  json.end event.end_time.in_time_zone("Eastern Time (US & Canada)")
  json.url event_url(event, format: :html)
  json.allDay false
end