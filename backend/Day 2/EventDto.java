package com.event.kaushik.DTO;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EventDto {
    private int id;
    private String eventName;
    private String Venue;
    private Date date;
    private int TotalCost;
}
