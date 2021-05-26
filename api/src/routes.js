import { Router } from 'express';
import { CompressionTypes } from 'kafkajs';

const routes = Router();

routes.post('/certifications', async (req, res) => {
  const message = {
    user: { id: 1, name: 'Juan Versolato Lopes' },
    course: 'Kafka com Node.js',
    grade: 5,
  }

  await req.producer.send({
    topic: 'issue-certificate',
    compression: CompressionTypes.GZIP,
    messages: [
      {
        value: JSON.stringify(message),
      }
    ]
  });

  return res.json({ ok: true });
});

export default routes;
