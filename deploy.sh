GOOGLE_PROJECT_ID=cloudrunhelloworldnetcore
# INSTANCE_CONNECTION_NAME=[CloudSql instance connection name from the Cloud Console]
# SQL_USER=[CloudSql user name, was "rest-api" in the video]
# SQL_PASSWORD=[CloudSql password, was "ciruh4598vfehr" in the video]
# SQL_NAME=[CloudSql database name, was "desserts_db" in the video]

gcloud builds submit --tag gcr.io/$GOOGLE_PROJECT_ID/helloworldngclient \
  # --project=$GOOGLE_PROJECT_ID

gcloud run deploy \
  --image gcr.io/$GOOGLE_PROJECT_ID/helloworldngclient \
  --platform managed \
  --allow-unauthenticated \
  # --set-env-vars=ESPv2_ARGS=--cors_preset=basic
  # --project=$GOOGLE_PROJECT_ID \
  # --region us-central1 \
  # --add-cloudsql-instances $INSTANCE_CONNECTION_NAME \
  # --set-env-vars "INSTANCE_CONNECTION_NAME=$INSTANCE_CONNECTION_NAME" \
  # --set-env-vars "SQL_USER=$SQL_USER" \
  # --set-env-vars "SQL_PASSWORD=$SQL_PASSWORD" \
  # --set-env-vars "SQL_NAME=$SQL_NAME" \
  # --set-env-vars "INST_CON_NAME=$INSTANCE_CONNECTION_NAME"
