#!/usr/bin/env bash

# This is for restore JKS from environment.
# Should only be used on CI.

# $KEYSTORE_FILE_B64    : Base64-nized Keystore
# $KEYSTORE_ALIAS       : Key Alias
# $KEYSTORE_STORE_PASS  : Store Password
# $KEYSTORE_KEY_PASS    : Key Password

# Proceed only keystore file environment is defined.
if [ -z ${KEYSTORE_FILE_B64+true} ]; then
    echo "No keystore file provided. Skipping..."
else
    BASE=`pwd`
    APP_BASE=$BASE/devTools/androidsdk/image/cordova
    PROP_BASE=$APP_BASE/platforms/android
    KEYSTORE_FILE_PATH=$APP_BASE/keystore.jks

    # Save key to keystore.
    echo "$KEYSTORE_FILE_B64" | base64 -d > $KEYSTORE_FILE_PATH

    PROP_

    # Debug sigining key property
   cat << EOF > $PROP_BASE/debug-signing.properties
key.store=/cordovasrc/keystore.jks
key.store.password=${KEYSTORE_STORE_PASS}
key.alias=${KEYSTORE_ALIAS}
key.alias.password=${KEYSTORE_KEY_PASS}
EOF

    # Release sigining key property
    cat << EOF > $PROP_BASE/release-signing.properties
key.store=/cordovasrc/keystore.jks
key.store.password=${KEYSTORE_STORE_PASS}
key.alias=${KEYSTORE_ALIAS}
key.alias.password=${KEYSTORE_KEY_PASS}
EOF

fi