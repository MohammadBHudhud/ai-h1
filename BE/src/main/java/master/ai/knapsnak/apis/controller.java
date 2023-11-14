package master.ai.knapsnak.apis;

import master.ai.knapsnak.algorithm.Item;
import master.ai.knapsnak.models.algOutput;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class controller {

    @Autowired
    private AlgService algService;

    @PostMapping("/run/{iter}/{weight}")
    public List<algOutput> run(@RequestBody List<Item> input, @PathVariable int iter, @PathVariable int weight){
        return algService.getItemsResults(input, iter, weight);
    }

    @GetMapping("/hi")
    public String run(){
        return "hello workk";
    }
}
