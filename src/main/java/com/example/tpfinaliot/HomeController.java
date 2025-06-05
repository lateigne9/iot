package com.example.tpfinaliot;

import com.example.tpfinaliot.models.Donnee;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Map;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class HomeController {

    private final IRepositoryDonees repositoryDonees;

    @PostMapping("/data")
    public ResponseEntity<String> receiveData(@RequestBody Map<String, String> payload) {
        repositoryDonees.save(Donnee.builder().date(LocalDateTime.now())
                .temperature(Double.parseDouble(payload.get("temperature")))
                .luminosite(Double.parseDouble(payload.get("luminosite")))
                .build());
        return ResponseEntity.ok("Reçu !");
    }


    @GetMapping("/getDonnee")
    public List<Donnee> getData15Minutes() {
        LocalDateTime quinzeMinutes = LocalDateTime.now().minusMinutes(15);
        return repositoryDonees.findByDateAfter(quinzeMinutes);
    }


    @GetMapping("/getAllDonnee")
    public List<Donnee> getAllData() {
        return repositoryDonees.findAll();
    }
}
