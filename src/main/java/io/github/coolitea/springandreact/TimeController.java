package io.github.coolitea.springandreact;

import java.util.Date;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TimeController {
    @GetMapping("/api/time")
    public String time() {
        return "현재 시각 : " + new Date() + "\n";
    }
}