class Event < ActiveRecord::Base
	validates :start_time, uniqueness: true
	validates :end_time, uniqueness: true
	validates :start_time, :end_time, :overlap => true
end
