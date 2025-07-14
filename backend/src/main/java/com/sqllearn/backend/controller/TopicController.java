import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sqllearn.backend.model.Topic;
import com.sqllearn.backend.service.TopicService;
import com.sqllearn.dto.TopicDTO;
import com.sqllearn.mapper.TopicMapper;

@RestController
@RequestMapping("/api/topics")
@CrossOrigin
public class TopicController {

    @Autowired
    private TopicService topicService;

    @GetMapping
    public List<TopicDTO> getAll() {
        return topicService.getAllTopics().stream()
                .map(TopicMapper::toDTO)
                .toList();
    }

    @GetMapping("/module/{moduleId}")
    public List<TopicDTO> getByModule(@PathVariable Long moduleId) {
        return topicService.getTopicsByModule(moduleId).stream()
                .map(TopicMapper::toDTO)
                .toList();
    }

    @PostMapping
    public Topic create(@RequestBody Topic topic) {
        return topicService.createTopic(topic); // Optional: Add createTopicDTO method if needed
    }

    @GetMapping("/{id}")
    public TopicDTO get(@PathVariable Long id) {
        return TopicMapper.toDTO(topicService.getTopicById(id));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        topicService.deleteTopic(id);
    }
}
